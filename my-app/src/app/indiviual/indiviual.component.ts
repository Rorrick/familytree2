import { Component, OnInit } from '@angular/core';

interface indiviualUser{
name:string,
surname:string,
gender:string,
dob:string,
deathDate:string

}

@Component({
  selector: 'app-indiviual',
  templateUrl: './indiviual.component.html',
  styleUrl: './indiviual.component.scss'
})
export class IndiviualComponent implements OnInit {

user:indiviualUser={
name:"Rorrick",
surname:"Smith",
gender:"Male",
dob:"18 November 1994",
deathDate:"N/A"

}
ngOnInit(): void {
  console.log("Testing of Oject",this.user);
  // console.log(this.userDetail.userName);
}

userFirstNameText:string = '';
userLastNameText:string = '';
userGenderText:string = '';
userDateOfBirthText:string = '';
userDeathDate:string = '';

transferText:string = '';
transferTextLastName:string = '';
transferTextGender:string = '';
transferTextDateOfBirth:string = '';
transferTextDeathDate:string = '';

// userDetail ={
//   const userName:"Rorrick",
// }

createUser(){
  this.transferText = this.userFirstNameText;
  this.transferTextLastName = this.userLastNameText;
  this.transferTextGender = this.userGenderText;
  console.log(this.transferTextGender = this.userGenderText)
  this.transferTextDateOfBirth = this.userDateOfBirthText;
  this.transferTextDeathDate = this.userDeathDate;
}

}

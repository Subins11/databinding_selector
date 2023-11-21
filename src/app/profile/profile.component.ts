import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent {

name: string=""
id: any=""
age: any=""
department: string=""

studentDetails : Array<any>=[]

save = ()=>{
  console.log(this.studentDetails)
  this.studentDetails.push({
    'name':this.name,
    'id':this.id,
    'age':this.age,
    'department':this.department,
  })
}

}

 

import { ApiProperty  } from "@nestjs/swagger";
import {
    User
  } from "../entities/user.entity";
  
  export class CreateUserDto extends User  {

 
    @ApiProperty({ description: 'the marketing name for the coffee' })
 
    FirstName: string;
  
    @ApiProperty()
    SurName: string;
  
    @ApiProperty()
    Designation: string;
  
    @ApiProperty()
    Email: string;
  
    @ApiProperty()
    Address: string;
  
    @ApiProperty()
    Salary: string;
  
    @ApiProperty()
    Gender: string;
    
  }



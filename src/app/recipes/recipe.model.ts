
export class Recipe {
//define how a singal recipe will look like
 public name: string;
 public description: string;
 public imagePath: string;

  constructor(name:string, desc:string, imagePath: string) 
  { 
this.name=name;
this.description= desc;
this.imagePath = imagePath;
  }

}

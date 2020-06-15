export class Subcategory{
  constructor(
    public _id: string,
    public name: string,
    public description: string,
    public user_asociate: string,
    public category: string,
    public file: string
  ){}
}

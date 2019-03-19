export class CategoriesModel {

  public code: string;
  public name: string;
  public id: string;
  public parent: CategoriesModel;

  constructor(id: string, name: string, code: string, parent: CategoriesModel) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.parent = parent;

  }

}

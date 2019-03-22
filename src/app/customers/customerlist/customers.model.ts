import {AddressModel} from './address.model';

export class CustomersModel {

  public firstName: string;
  public id: string;
  public lastName: string;
  public phone: string;
  public email: string;
  public guest: string;
  public addresses: AddressModel[];

}

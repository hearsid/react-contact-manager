import { IContact } from "../model/contact.model";

export class Utilities {
  constructor() { }

  static getParameterByName(name, url = '') {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  static generateContacts(numberOfContacts: number, allContacts: IContact[]): IContact[] {

    var contacts: IContact[] = [];
    // there are six contacts initially
    for (let i = 0; i < Math.floor(numberOfContacts / 6); i++) {
      contacts = contacts.concat(allContacts);
    }

    // add more contacts based on remainder
    for (let i = 0; i < (numberOfContacts % 6); i++) {
      contacts.push(allContacts[i]);
    }
    return contacts;
  }
}

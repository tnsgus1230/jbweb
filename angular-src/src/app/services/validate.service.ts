import { Injectable } from "@angular/core";

@Injectable()
export class ValidateService {
  constructor() { }

  validateRegister(user) {
    if (
      user.name == undefined ||
      user.email == undefined ||
      user.username == undefined ||
      user.password == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }
  validateProceed(user, card) {
    if (
      user.name == undefined ||
      user.email == undefined ||
      user.username == undefined ||
      card.cardnumber == undefined ||
      card.expire == undefined ||
      card.secretnum == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateCardnum(num) {
    var re = /^([0-9]{4})-?([0-9]{4})-?([0-9]{4})-?([0-9]{4})$/;
    return re.test(num)
  }

  validateCardlimit(limit) {
    var re = /^(0[1-9]|1[012])-(19|20|21|22|23|24)$/;
    return re.test(limit)
  }

  validateCardSecure(num) {
    var re = /^([0-9]{3})$/;
    return re.test(num)
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  vaildateBoard(board) {
    if (board.title == undefined || board.context == undefined) {
      return false;
    } else {
      return true;
    }
  }


}

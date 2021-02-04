import { Borrow } from '../generated/HT/HT'
import { HtBorrowImpl } from '../generated/schema'

export function handleBorrows(event: Borrow,): void {
    

    let htBorrowImpl   = HtBorrowImpl.load("HtBorrow")
    if(htBorrowImpl == null){
 htBorrowImpl = new HtBorrowImpl("HtBorrow");
  
    }
    htBorrowImpl.totalBorrows = event.params.totalBorrows
  htBorrowImpl.borrower = event.params.borrower
  htBorrowImpl.accountBorrows = event.params.accountBorrows
  htBorrowImpl.borrowAmount = event.params.borrowAmount
  htBorrowImpl.save()



}

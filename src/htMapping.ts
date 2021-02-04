import { Borrow } from '../generated/HT/HT'
import { HtBorrowImpl } from '../generated/schema'

export function handleBorrows(event: Borrow): void {
  let htBorrowImpl = new HtBorrowImpl("HtBorrow");
  htBorrowImpl = event.params.totalBorrows
  htBorrowImpl = event.params.borrower
  htBorrowImpl = event.params.accountBorrows
  htBorrowImpl = event.params.borrowAmount
  htBorrowImpl.save()
}

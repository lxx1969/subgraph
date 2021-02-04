import { Borrow,InitializeCall,HT} from '../generated/HT/HT'
import { HtBorrowImpl} from '../generated/schema'

export function handleBorrows(event: Borrow,call:InitializeCall,HT:HT): void {
    

    let htBorrowImpl   = HtBorrowImpl.load("HtBorrow")
    if(htBorrowImpl == null){
 htBorrowImpl = new HtBorrowImpl("HtBorrow");
  
    }
    htBorrowImpl.totalBorrows = event.params.totalBorrows
  htBorrowImpl.borrower = event.params.borrower
  htBorrowImpl.accountBorrows = event.params.accountBorrows
  htBorrowImpl.borrowAmount = event.params.borrowAmount
  htBorrowImpl.decimals = call.inputs.decimals_

  htBorrowImpl.accountMint = HT.balanceOfUnderlying(htBorrowImpl.borrower)
  htBorrowImpl.totalMint = HT.getCash()
  htBorrowImpl.supplyRatePerBlock = HT.supplyRatePerBlock()
  htBorrowImpl.borrowRatePerBlock = HT.borrowRatePerBlock()

  
  htBorrowImpl.save()


}




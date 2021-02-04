import { Borrow,InitializeCall,HT,Mint} from '../generated/HT/HT'
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
//   htBorrowImpl.decimals = call.inputs.decimals_
   
 
  htBorrowImpl.decimals = 18
//   htBorrowImpl.accountMint = HT.balanceOfUnderlying(htBorrowImpl.borrower)
//   htBorrowImpl.totalMint = HT.getCash()
//   htBorrowImpl.supplyRatePerBlock = HT.supplyRatePerBlock()
//   htBorrowImpl.borrowRatePerBlock = HT.borrowRatePerBlock()


  htBorrowImpl.save()
  

}


export function handleMint(event: Mint,call:InitializeCall,HT:HT): void {
    

    let htBorrowImpl   = HtBorrowImpl.load("HtMint")
    if(htBorrowImpl == null){
 htBorrowImpl = new HtBorrowImpl("HtMint");
  
    }
//     htBorrowImpl.totalBorrows = event.params.totalBorrows
//   htBorrowImpl.borrower = event.params.borrower
//   htBorrowImpl.accountBorrows = event.params.accountBorrows
//   htBorrowImpl.borrowAmount = event.params.borrowAmount
//   htBorrowImpl.decimals = call.inputs.decimals_

//   htBorrowImpl.accountMint = HT.balanceOfUnderlying(htBorrowImpl.borrower)
  htBorrowImpl.totalMint = HT.getCash()
  htBorrowImpl.supplyRatePerBlock = HT.supplyRatePerBlock()
  htBorrowImpl.borrowRatePerBlock = HT.borrowRatePerBlock()


  htBorrowImpl.save()


}




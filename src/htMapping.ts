import { Borrow,InitializeCall,HT,Mint} from '../generated/HT/HT'
import { HtBorrowImpl,HtMintImpl} from '../generated/schema'
import{log} from '@graphprotocol/graph-ts'
export function handleBorrows(event: Borrow): void {
    

 let htBorrowImpl = new HtBorrowImpl("HtBorrow");
  
    htBorrowImpl.totalBorrows = event.params.totalBorrows
  htBorrowImpl.borrower = event.params.borrower
  htBorrowImpl.accountBorrows = event.params.accountBorrows
  htBorrowImpl.borrowAmount = event.params.borrowAmount
  let array = [htBorrowImpl.accountBorrows,htBorrowImpl.borrower,htBorrowImpl.accountBorrows,htBorrowImpl.totalBorrows]
  log.info('htBorrowImpl is htBorrowImpl.accountBorrows,htBorrowImpl.borrower,htBorrowImpl.accountBorrows,htBorrowImpl.totalBorrows',array)
  let Ht = HT.bind(0xddc822c72e6CC10Af98De2D53cC04dAeb4a5336e)
  let decimals = Ht.decimals()
  log.info('HTimpl decimals is',[decimals]);
  
  htBorrowImpl.save()
  

}


export function handleMint(event: Mint): void {
    
let htMintImpl = new HtMintImpl("HtMint")
htMintImpl.accountMint = event.params.mintAmount
htMintImpl.totalMint = event.params.mintTokens

let Ht = HT.bind(0xddc822c72e6CC10Af98De2D53cC04dAeb4a5336e)
Ht.decimals()
}




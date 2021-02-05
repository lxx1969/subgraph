import { Borrow,InitializeCall,HT,Mint} from '../generated/HT/HT'
// import { ERC20} from '../generated/HT/HT'
import { HtBorrowImpl,HtMintImpl} from '../generated/schema'
import{log,BigInt,Address} from '@graphprotocol/graph-ts'
export function handleBorrows(event: Borrow): void {
    

 let htBorrowImpl = new HtBorrowImpl("HtBorrow");
  
    htBorrowImpl.totalBorrows = event.params.totalBorrows
  htBorrowImpl.borrower = event.params.borrower
  htBorrowImpl.accountBorrows = event.params.accountBorrows
  htBorrowImpl.borrowAmount = event.params.borrowAmount
//   log.info('htBorrowImpl is htBorrowImpl.accountBorrows',[htBorrowImpl.accountBorrows.toString()])
//   log.info('htBorrowImpl is htBorrowImpl.borrower',[htBorrowImpl.borrower.toHexString()])
//   log.info('htBorowImpl is htBorrowImpl.borrowAmount',[htBorrowImpl.borrowAmount.toString()])
//   log.info('htBorrowImpl is  htBorrowImpl.totalBorrows',[ htBorrowImpl.totalBorrows.toString()]);
  
  
  
  htBorrowImpl.save()
  

}


export function handleMint(event: Mint): void {
    
let htMintImpl = new HtMintImpl("HtMint")
htMintImpl.accountMint = event.params.mintAmount
htMintImpl.totalMint = event.params.mintTokens


let address = Address.fromString('0xddc822c72e6CC10Af98De2D53cC04dAeb4a5336e')

  let Ht = HT.bind(address)
  log.info('Ht bind info--------------------------------',[ Ht.getCash().toString()]);

  let callResult = Ht.try_decimals()
  if (callResult.reverted) {
    log.info("getGravatar reverted", [])
  } else {
  let decimals = BigInt.fromI32(callResult.value)
  log.info('HTimpl decimals is',[decimals.toString()]);


htMintImpl.save()
}
}


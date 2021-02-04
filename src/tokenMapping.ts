// import { GetCashCall,TotalBorrowsCall,
//   CallSupplyRatePerBlock,BorrowRatePerBlockCall} from '../generated/Dai/Dai'
// import { GetCash,TotalBorrow,SupplyRatePerBlock,BorrowRatePerBlock } from '../generated/schema'


// export function handleGetCash(call: GetCashCall): void {
//   let getCash = new GetCash()
//   getCash.cash = call.outputs//代改
//   getCash.save()
// }

// export function handleGetTotalBorrows(call: TotalBorrowsCall): void {
//   let totalBorrow = new TotalBorrow()
//   totalBorrow.borrow = call.outputs//代改
//   totalBorrow.save()
// }

// export function handleSupplyRatePerBlock(call: CallSupplyRatePerBlock): void {
//   let supplyRatePerBlock = new SupplyRatePerBlock()
//   supplyRatePerBlock.rate = call.outputs//代改
//   supplyRatePerBlock.save()
// }

// export function handleBorrowRatePerBlock(call: BorrowRatePerBlockCall): void {
//   let borrowRatePerBlock = new BorrowRatePerBlock()
//   borrowRatePerBlock.rate = call.outputs//代改
//   borrowRatePerBlock.save()
// }

// import {TotalBorrowsCurrentCall} from '../generated/Dai/Dai'
// import { GetCash,TotalBorrow,SupplyRatePerBlock,BorrowRatePerBlock } from '../generated/schema'


// export function handleTotalBorrowsCurrent(call: TotalBorrowsCurrentCall): void {
//   // let id = call.transaction.hash.toHex()
//   // let totalBorrow = new TotalBorrow(id)
 
//   // totalBorrow.save()
// }

import { Borrow,InitializeCall } from '../generated/Dai/Dai'
import { BorrowImpl } from '../generated/schema'

export function handleBorrows(event: Borrow,call:InitializeCall): void {
  // let borrow = BorrowImpl.load("borrow")
  // if (borrow == null) {
   let borrow = new BorrowImpl("borrow")
  // }
  
  // borrow.decimals =  call.inputs.decimals_
  borrow.borrowAmount = event.params.borrowAmount
  borrow.accountBorrows = event.params.accountBorrows
  borrow.totalBorrows = event.params.totalBorrows
  borrow.save()


}
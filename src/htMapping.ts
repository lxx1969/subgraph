// import { GetCashCall,TotalBorrowsCall,
//   CallSupplyRatePerBlock,BorrowRatePerBlockCall} from '../generated/Dai/Dai'
// import { GetCash,TotalBorrow,SupplyRatePerBlock,BorrowRatePerBlock } from '../generated/schema'


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

// import { Borrow,InitializeCall,TotalBorrowsCurrentCall } from '../generated/HT/HT'
// import { HtBorrowImpl } from '../generated/schema'

// export function handleBorrows(event: Borrow): void {
  
//    let borrowimpl = new HtBorrowImpl("HtBorrow")
  
  

//   borrowimpl.borrowAmount = event.params.borrowAmount
//   borrowimpl.accountBorrows = event.params.accountBorrows
//   borrowimpl.totalBorrows = event.params.totalBorrows
//   borrowimpl.save()


// }



// // export function handleTotalBorrowsCurrentCall(call: TotalBorrowsCurrentCall): void {
// //   let getCash = new GetCash()
// //   getCash.cash = call.outputs//代改
// //   getCash.save()
// // }

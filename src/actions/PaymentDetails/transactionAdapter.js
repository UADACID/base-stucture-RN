const transactionAdapter = ({ bankName, payment_type }) => {
  const randomString = Math.random().toString(36).substring(7)
    const object = {...defaultBody}
    object.payment_type = payment_type
    object.transaction_details.order_id = `order-${randomString}`
    switch (bankName) {
      case 'mandiri':

        const echannel = {
              "bill_info1" : "Payment For:",
              "bill_info2" : "Food"
            }
        object.echannel = echannel
        return object
        // this.service(object)
        break;
      case 'bca':
        object.bank_transfer = {"bank": bankName}
        // this.service(object)
        return object
        break;
      default:
        return
        break;
    }
}

export default transactionAdapter

const defaultBody = {
    "payment_type": "echannel",
    "transaction_details": {
        "gross_amount": 99000,
        "order_id": "order-101dns"
    },
    "customer_details": {
        "email": "test@Midtrans.com",
        "first_name": "budi",
        "last_name": "utomo",
        "phone": "+6281 1234 1234"
    },
    "item_details": [
          {
             "id": "item01",
             "price": 50000,
             "quantity": 1,
             "name": "Ayam Zozozo"
          },
          {
             "id": "item02",
             "price": 49000,
             "quantity": 1,
             "name": "Ayam Xoxoxo"
          }
         ],
}

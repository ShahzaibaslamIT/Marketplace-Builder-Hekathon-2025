// Product Schema
export const productSchema = {
    name: 'product',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'category', type: 'string', title: 'Category' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'image', type: 'image', title: 'Product Image' },
      { name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags' }
    ]
  };
  
  // User Schema
  export const userSchema = {
    name: 'user',
    type: 'document',
    fields: [
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'password', type: 'string', title: 'Password' },
      { name: 'name', type: 'string', title: 'Full Name' },
      { name: 'preferences', type: 'array', of: [{ type: 'string' }], title: 'Style Preferences' },
      { name: 'measurements', type: 'object', fields: [
        { name: 'height', type: 'number', title: 'Height (cm)' },
        { name: 'weight', type: 'number', title: 'Weight (kg)' }
      ] }
    ]
  };
  
  // Order Schema
  export const orderSchema = {
    name: 'order',
    type: 'document',
    fields: [
      { name: 'userId', type: 'string', title: 'User ID' },
      { name: 'products', type: 'array', of: [{
        type: 'object',
        fields: [
          { name: 'productId', type: 'string', title: 'Product ID' },
          { name: 'quantity', type: 'number', title: 'Quantity' }
        ]
      }], title: 'Products' },
      { name: 'status', type: 'string', title: 'Order Status' },
      { name: 'paymentInfo', type: 'object', fields: [
        { name: 'method', type: 'string', title: 'Payment Method' }
      ] }
    ]
  };
  
  // AI Recommendation Schema
  export const aiRecommendationSchema = {
    name: 'aiRecommendation',
    type: 'document',
    fields: [
      { name: 'userId', type: 'string', title: 'User ID' },
      { name: 'inputData', type: 'object', fields: [
        { name: 'image', type: 'image', title: 'User Image' },
        { name: 'measurements', type: 'object', fields: [
          { name: 'height', type: 'number', title: 'Height (cm)' },
          { name: 'weight', type: 'number', title: 'Weight (kg)' }
        ] }
      ] },
      { name: 'recommendations', type: 'array', of: [{
        type: 'object',
        fields: [
          { name: 'productId', type: 'string', title: 'Recommended Product ID' },
          { name: 'confidence', type: 'number', title: 'Confidence Score' }
        ]
      }], title: 'Recommendations' }
    ]
  };
  
  // Shipment Schema
  export const shipmentSchema = {
    name: 'shipment',
    type: 'document',
    fields: [
      { name: 'orderId', type: 'string', title: 'Order ID' },
      { name: 'status', type: 'string', title: 'Shipment Status' },
      { name: 'trackingNumber', type: 'string', title: 'Tracking Number' },
      { name: 'ETA', type: 'datetime', title: 'Estimated Time of Arrival' }
    ]
  };
  
  // Payment Schema
  export const paymentSchema = {
    name: 'payment',
    type: 'document',
    fields: [
      { name: 'orderId', type: 'string', title: 'Order ID' },
      { name: 'paymentMethod', type: 'string', title: 'Payment Method' },
      { name: 'status', type: 'string', title: 'Payment Status' },
      { name: 'transactionId', type: 'string', title: 'Transaction ID' },
      { name: 'amount', type: 'number', title: 'Payment Amount' }
    ]
  };
  
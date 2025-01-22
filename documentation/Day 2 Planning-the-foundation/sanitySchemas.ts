
import { Rule } from '@sanity/types'; 

const products = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Product ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0).max(100),  
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'ratings',
      title: 'Ratings',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0).max(5),  // Added type annotation here
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};

// Delivery schema
const Delivery = {
  name: 'deliveryZone',
  title: 'Delivery Zone',
  type: 'document',
  fields: [
    {
      name: 'zoneName',
      title: 'Zone Name',
      type: 'string',
    },
    {
      name: 'coverageArea',
      title: 'Coverage Area',
      type: 'string',
    },
    {
      name: 'assignedDrivers',
      title: 'Assigned Drivers',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};

// Customer schema
const Customer = {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'customerId',
      title: 'Customer ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'emailPhone',
      title: 'Email / Phone',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
    },
    {
      name: 'orderHistory',
      title: 'Order History',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'order' }] }],
    },
    {
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
    },
  ],
};

// Order schema
const Order = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
    },
    {
      name: 'customerInfo',
      title: 'Customer Info',
      type: 'reference',
      to: [{ type: 'customer' }],
    },
    {
      name: 'productDetails',
      title: 'Product Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'product', title: 'Product', type: 'reference', to: [{ type: 'product' }] },
            { name: 'quantity', title: 'Quantity', type: 'number' },
          ],
        },
      ],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
    },
  ],
};

// Shipment schema
const Shipment = {
  name: 'shipment',
  title: 'Shipment',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'reference',
      to: [{ type: 'order' }],
    },
    {
      name: 'shipmentId',
      title: 'Shipment ID',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'deliveryDate',
      title: 'Delivery Date',
      type: 'datetime',
    },
    {
      name: 'trackingNumber',
      title: 'Tracking Number',
      type: 'string',
    },
  ],
};

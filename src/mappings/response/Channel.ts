export default {
  type: "classInfo",
  localName: "Channel",
  propertyInfos: [
    {
      type: "element",
      name: "channel_id",
      typeInfo: "String"
    },
    {
      type: "element",
      name: "offer_description",
      wrapperElementName: "offer_description",
      collection: true,
      typeInfo: "Mss.Offer"
    },
    {
      type: "element",
      name: "room_price",
      wrapperElementName: "room_price",
      collection: true,
      typeInfo: "Mss.RoomPrice"
    },
    {
      type: "element",
      name: "room_description",
      wrapperElementName: "room_description",
      collection: true,
      typeInfo: "Mss.Room"
    },
    {
      type: "element",
      name: "service_price",
      wrapperElementName: "service_price",
      collection: true,
      typeInfo: "Mss.Price"
    },
    {
      type: "element",
      name: "from_price",
      typeInfo: "Decimal"
    },
    {
      type: "element",
      name: "base_price",
      wrapperElementName: "base_price",
      collection: true,
      typeInfo: "Mss.Price"
    },
    {
      type: "element",
      name: "cancel_policies",
      wrapperElementName: "cancel_policies",
      collection: true,
      typeInfo: "Mss.CancelPolicy"
    },
    {
      type: "element",
      name: "payment_terms",
      wrapperElementName: "payment_terms",
      collection: true,
      typeInfo: "Mss.PaymentTerm"
    }
  ]
};

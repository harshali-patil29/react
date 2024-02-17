import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";

const resList = 
    [
        {
          "info": {
            "id": "415194",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Kharghar -little world",
            "areaName": "Little world Mall",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.3,
            "parentId": "166",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-17 03:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-kharghar-ltile-world-little-world-mall-mumbai-415194",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "343246",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
            "locality": "Sector 15",
            "areaName": "Cbd Belapur",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Bakery",
              "Ice Cream"
            ],
            "avgRating": 4.5,
            "parentId": "195515",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 7.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "7.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-16 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-sector-15-cbd-belapur-mumbai-343246",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "30245",
            "name": "McDonald's",
            "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
            "locality": "Pacific Heights",
            "areaName": "Kharghar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-16 23:45:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-pacific-heights-kharghar-mumbai-30245",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "425510",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Kharghar",
            "areaName": "Kharghar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-17 04:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-kharghar-mumbai-425510",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "28793",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "sj4p3vftyl9ffruimuzt",
            "locality": "Plot No. 18, Sector -20",
            "areaName": "Kharghar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "2456",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 25,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-17 02:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-plot-no-18-sector-20-kharghar-mumbai-28793",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "28911",
            "name": "Cheelizza - India ka Pizza",
            "cloudinaryImageId": "f58a1b772e5eeea45ff8ead3890703ed",
            "locality": "Kharghar",
            "areaName": "Kharghar",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Fast Food"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "375077",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-17 03:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ],
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/cheelizza-india-ka-pizza-kharghar-mumbai-28911",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "64138",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Sector 7",
            "areaName": "Kharghar",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 3.9,
            "parentId": "721",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-17 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-sector-7-kharghar-mumbai-64138",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "355570",
            "name": "Wow! Momo",
            "cloudinaryImageId": "5a148e63e9c54942e37627da1aa156be",
            "locality": "Sector 4",
            "areaName": "Kharghar",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Tibetan",
              "Healthy Food",
              "Asian",
              "Chinese",
              "Snacks",
              "Continental",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "1776",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-17 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-sector-4-kharghar-mumbai-355570",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "395327",
            "name": "McDonald's Gourmet Burger Collection",
            "cloudinaryImageId": "jxkhl0dt6p7rpdjhg5nu",
            "locality": "Pacific Heights",
            "areaName": "Kharghar",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "10761",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-16 23:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-pacific-heights-kharghar-mumbai-395327",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "351103",
            "name": "Grameen Kulfi",
            "cloudinaryImageId": "rmi7aycp29azclvfq1yd",
            "locality": "Sector 19",
            "areaName": "Kharghar",
            "costForTwo": "₹120 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "12175",
            "avgRatingString": "4.7",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-17 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/grameen-kulfi-sector-19-kharghar-mumbai-351103",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "341216",
            "name": "New York Waffles & Dinges",
            "cloudinaryImageId": "gpfzh5i9ql8pymluoxsv",
            "locality": "Kharghar",
            "areaName": "Kharghar",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Waffle",
              "Beverages",
              "Desserts",
              "Bakery"
            ],
            "avgRating": 3.9,
            "veg": true,
            "parentId": "148410",
            "avgRatingString": "3.9",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-16 23:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/new-york-waffles-and-dinges-kharghar-mumbai-341216",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "392643",
            "name": "Chaayos Chai+Snacks=Relax",
            "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
            "locality": "Little World Mall",
            "areaName": "Kharghar",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Bakery",
              "Beverages",
              "Chaat",
              "Desserts",
              "Home Food",
              "Italian",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "Sweets"
            ],
            "avgRating": 4.5,
            "parentId": "281782",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-16 23:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-little-world-mall-kharghar-mumbai-392643",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "27117",
            "name": "Faasos - Wraps, Rolls & Shawarma",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "locality": "Simran Residency",
            "areaName": "Kharghar RK",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Kebabs",
              "Fast Food",
              "Snacks",
              "American",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "21809",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-16 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-simran-residency-kharghar-rk-mumbai-27117",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "179524",
            "name": "Sweet Bengal",
            "cloudinaryImageId": "uzpdcbci6qyyqmxmqisq",
            "locality": "Kharghar",
            "areaName": "Kharghar",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "1250",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-16 22:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-bengal-kharghar-mumbai-179524",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "434954",
            "name": "Samosa Singh",
            "cloudinaryImageId": "77baefd8a5e319c828b4d7dff7260644",
            "locality": "Raj Palace",
            "areaName": "Kharghar",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "North Indian",
              "Indian",
              "Snacks",
              "Street Food"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "5639",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-16 23:45:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/samosa-singh-raj-palace-kharghar-mumbai-434954",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "451678",
            "name": "NOTO - Ice Creams & Desserts",
            "cloudinaryImageId": "81ac87e5c89c16adc867be38ce5a1ba3",
            "locality": "Sec - 4",
            "areaName": "Kharghar",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "468478",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-17 03:30:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-sec-4-kharghar-mumbai-451678",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "33213",
            "name": "The J",
            "cloudinaryImageId": "wr4sqcp09etzfma2yb5s",
            "locality": "Kharghar",
            "areaName": "Kharghar",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "American",
              "Snacks",
              "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2022",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-17 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-j-kharghar-mumbai-33213",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "50638",
            "name": "99 Pancakes",
            "cloudinaryImageId": "c2f533ee4960991a29227a27f516c59b",
            "locality": "Sector 4",
            "areaName": "Kharghar",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "387975",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-17 01:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/99-pancakes-sector-4-kharghar-mumbai-50638",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "282466",
            "name": "Nothing But Chicken",
            "cloudinaryImageId": "mro3wbbvox5katmzoqag",
            "locality": "Sai Moksh Chs",
            "areaName": "Kharghar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Salads",
              "Biryani",
              "Kebabs",
              "Fast Food",
              "Healthy Food"
            ],
            "avgRating": 4.3,
            "parentId": "668",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-16 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/nothing-but-chicken-sai-moksh-chs-kharghar-mumbai-282466",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "628548",
            "name": "The Brooklyn Creamery - Healthy Ice Cream",
            "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
            "locality": "BHOOMI TOWER",
            "areaName": "KHARGAR",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Desserts",
              "Ice Cream",
              "Healthy Food"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "236673",
            "avgRatingString": "4.2",
            "totalRatingsString": "50+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-16 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-bhoomi-tower-khargar-mumbai-628548",
            "type": "WEBLINK"
          }
        }
      ];
// console.log(resList[0].info.name);
const Body = () => {
    return (
        <div className="body">
            <div className="search">What's on your mind?</div>
            
            <div className="res-container">
                    {resList.map((restaurant) =>(
                        <RestaurantCard key={resList[0].info.id} resData = {restaurant}/>
                        ))
                    }
            </div>
        </div>
    )
}

export default Body;
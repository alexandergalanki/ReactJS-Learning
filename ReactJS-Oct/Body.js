import ResCard from "./RestaurantCard";
import resObj from "../Utlis/ResData";
import {useState,useEffect} from "react";

const Body=()=>{
    let listofRes=[
        {
            "info": {
              "id": "71351",
              "name": "Sweet Magic",
              "cloudinaryImageId": "lzk60pgzej2frjof7mzz",
              "locality": "MG Road, Vijayawada",
              "areaName": "MG Road",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "South Indian",
                "Indian",
                "Tandoor",
                "Desserts",
                "Bakery",
                "Chinese",
                "Thalis",
                "Beverages"
              ],
              "avgRating": 4.1,
              "parentId": "3142",
              "avgRatingString": "4.1",
              "totalRatingsString": "5.7K+",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-09-30 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Mithai.png",
                    "description": "Delivery!"
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
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Mithai.png"
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
                "header": "40% OFF",
                "subHeader": "UPTO ₹75",
                "discountTag": "POCKET HERO",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
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
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/vijayawada/sweet-magic-mg-road-rest71351",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "801371",
              "name": "Makhani Darbar",
              "cloudinaryImageId": "c583da4b69d264ffe705e5918fad0e98",
              "locality": "Governorpet",
              "areaName": "Ramachandra Rao Raod",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Kebabs",
                "Mughlai",
                "Beverages",
                "Desserts"
              ],
              "avgRating": 3.8,
              "parentId": "478595",
              "avgRatingString": "3.8",
              "totalRatingsString": "34",
              "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-09-30 23:59:00",
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
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/vijayawada/makhani-darbar-governorpet-ramachandra-rao-raod-rest801371",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "505183",
              "name": "Samosa Singh",
              "cloudinaryImageId": "77baefd8a5e319c828b4d7dff7260644",
              "locality": "Suryarao pet",
              "areaName": "Governorpet",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Snacks",
                "North Indian",
                "Beverages"
              ],
              "avgRating": 4.2,
              "veg": true,
              "parentId": "5639",
              "avgRatingString": "4.2",
              "totalRatingsString": "1.3K+",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-09-30 20:00:00",
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
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/vijayawada/samosa-singh-suryarao-pet-governorpet-rest505183",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "71320",
              "name": "McDonald's",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/1c188b92-3fb6-4065-abb9-d149366e4431_71320.jpg",
              "locality": "Auto Nagar",
              "areaName": "Auto Nagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.4,
              "parentId": "630",
              "avgRatingString": "4.4",
              "totalRatingsString": "30K+",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-09-30 23:45:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                    "description": "Delivery!"
                  },
                  {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
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
                          "description": "Delivery!",
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                        }
                      },
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Burger.png"
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
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "12K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/vijayawada/mcdonalds-auto-nagar-rest71320",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "327236",
              "name": "Delights by INOX",
              "cloudinaryImageId": "b857fcf611707fedd3773eb02688f925",
              "locality": "Teacher's Colony",
              "areaName": "Gurunanak Colony",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Snacks"
              ],
              "avgRating": 4.2,
              "veg": true,
              "parentId": "385095",
              "avgRatingString": "4.2",
              "totalRatingsString": "226",
              "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-09-30 23:59:00",
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
                "subHeader": "UPTO ₹90"
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
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/vijayawada/delights-by-inox-teachers-colony-gurunanak-colony-rest327236",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "826508",
              "name": "Pastas By Pizza Hut",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/d5480383-5a6c-4324-8abe-926f4d4c5d3c_826508.JPG",
              "locality": "PVP Square mall",
              "areaName": "Labbipet",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Pastas"
              ],
              "avgRating": 3.7,
              "parentId": "306806",
              "avgRatingString": "3.7",
              "totalRatingsString": "18",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 0.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "0.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-09-30 23:00:00",
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
                "subHeader": "UPTO ₹90"
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
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/vijayawada/pastas-by-pizza-hut-pvp-square-mall-labbipet-rest826508",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "420300",
              "name": "McDonald's Gourmet Burger Collection",
              "cloudinaryImageId": "tn776iomki3g49m7irm3",
              "locality": "P And T Colony",
              "areaName": "Auto Nagar",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.3,
              "parentId": "10761",
              "avgRatingString": "4.3",
              "totalRatingsString": "221",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-09-30 23:45:00",
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
                "subHeader": "UPTO ₹90"
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
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/vijayawada/mcdonalds-gourmet-burger-collection-p-and-t-colony-auto-nagar-rest420300",
              "type": "WEBLINK"
            }
          }
    ]
    let [resList,setresList]=useState(listofRes);

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData=async ()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsonn=await data.json();
      const List=jsonn.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setresList(List);
    }

    return(
        <div className="Body">
            <div className="Search">
                <input type="text" className="InputF"></input>
                <button 
                className="filterBtn" 
                onClick={() => {
                    const filteredList=listofRes.filter(
                        (res)=>res.info.avgRating>4
                    );
                    setresList(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    resList.map(restaurant => 
                    <ResCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;
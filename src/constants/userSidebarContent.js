import {userAddressesRoute, userOrdersRoute, userProfileRoute, userWishlistRoute} from "./routes";

export const userSidebarContent = [
    {
        text: "Orders management",
        route: userOrdersRoute
    },
    {
        text: "Wishlist",
        route: userWishlistRoute
    },
    {
        text: "Addresses",
        route: userAddressesRoute
    },
    {
        text: "Profile",
        route: userProfileRoute
    }
]
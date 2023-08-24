import {
    adminAddBrandRoute,
    adminAddCategoryRoute,
    adminAddProductRoute,
    adminAddSubcategoryRoute,
    adminCouponsRoute,
    adminOrdersRoute,
    adminProductsRoute
} from "./routes";

export const adminSideBarContent = [
    {
        text: "Orders management",
        route: adminOrdersRoute
    },
    {
        text: "Products management",
        route: adminProductsRoute
    },
    {
        text: "Coupons management",
        route: adminCouponsRoute,
    },
    {
        text: "Add Brands",
        route: adminAddBrandRoute
    },
    {
        text: "Add Category",
        route: adminAddCategoryRoute
    },
    {
        text: "Add subcategory",
        route: adminAddSubcategoryRoute
    },
    {
        text: "Add Product",
        route: adminAddProductRoute
    }
]
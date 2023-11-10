const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }]
  },
  {
    path: "/users",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "create", component: () => import("pages/CreateUser.vue") }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;

app.UseMvc(routes =>
{
    routes.MapRoute(
        name: "products",
        template: "products/{id}",
        defaults: new { controller = "Products", action = "Details" });
});

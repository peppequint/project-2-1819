console.log("Init");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(function(register) {
      console.log("Service worker registrated. Scope is " + register.scope);
    })
    .catch(function(error) {
      console.log("Registration failed with " + error);
    });
}

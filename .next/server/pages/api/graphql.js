"use strict";
(() => {
var exports = {};
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 5247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ graphql)
});

// NAMESPACE OBJECT: ./schema/typeDefs.ts
var typeDefs_namespaceObject = {};
__webpack_require__.r(typeDefs_namespaceObject);
__webpack_require__.d(typeDefs_namespaceObject, {
  "AllProductsQuery": () => (AllProductsQuery),
  "Product": () => (Product),
  "ProductQuery": () => (ProductQuery)
});

;// CONCATENATED MODULE: external "apollo-server-micro"
const external_apollo_server_micro_namespaceObject = require("apollo-server-micro");
;// CONCATENATED MODULE: external "micro-cors"
const external_micro_cors_namespaceObject = require("micro-cors");
var external_micro_cors_default = /*#__PURE__*/__webpack_require__.n(external_micro_cors_namespaceObject);
;// CONCATENATED MODULE: external "nexus"
const external_nexus_namespaceObject = require("nexus");
;// CONCATENATED MODULE: ./constants.ts
const END_POINT = "http://localhost:3001";

;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./graphql/queries.ts

const GetProductQuery = client_namespaceObject.gql`
  query GetProduct($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;
const GetAllProductsQuery = client_namespaceObject.gql`
  query GetAllProducts {
    allProducts {
      id
      brand
    }
  }
`;

;// CONCATENATED MODULE: ./schema/typeDefs.ts



const Product = (0,external_nexus_namespaceObject.objectType)({
    name: "Product",
    definition (t) {
        t.nonNull.id("id");
        t.string("name");
        t.string("power");
        t.string("description");
        t.int("price");
        t.int("quantity");
        t.string("brand");
        t.int("weight");
        t.int("height");
        t.int("width");
        t.int("length");
        t.string("model_code");
        t.string("colour");
        t.string("img_url");
    }
});
const ProductQuery = (0,external_nexus_namespaceObject.extendType)({
    type: "Query",
    definition (t) {
        t.field("Product", {
            type: Product,
            args: {
                id: (0,external_nexus_namespaceObject.nonNull)("ID")
            },
            resolve: async (_root, args)=>{
                try {
                    const response = await fetch(END_POINT, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            query: GetProductQuery,
                            variables: {
                                id: args.id
                            }
                        })
                    });
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const jsonResponse = await response.json();
                    return jsonResponse.data.Product;
                } catch (error) {
                    console.error("Error fetching data: ", error);
                    return {};
                }
            }
        });
    }
});
const AllProductsQuery = (0,external_nexus_namespaceObject.extendType)({
    type: "Query",
    definition (t) {
        t.list.field("allProducts", {
            type: Product,
            resolve: async ()=>{
                try {
                    const response = await fetch(END_POINT, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            query: GetAllProductsQuery
                        })
                    });
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const jsonResponse = await response.json();
                    return jsonResponse.data.allProducts;
                } catch (error) {
                    console.error("Error fetching data: ", error);
                    return {};
                }
            }
        });
    }
});

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./schema/index.ts



const schema = (0,external_nexus_namespaceObject.makeSchema)({
    types: [
        typeDefs_namespaceObject
    ],
    outputs: {
        typegen: external_path_default().join(process.cwd(), "generated/nexus-typegen.ts"),
        schema: external_path_default().join(process.cwd(), "generated/schema.graphql")
    }
});
/* harmony default export */ const schema_0 = (schema);

;// CONCATENATED MODULE: ./pages/api/graphql.ts



const cors = external_micro_cors_default()({
    allowMethods: [
        "POST",
        "OPTIONS"
    ],
    allowHeaders: [
        "Content-Type",
        "Authorization"
    ],
    origin: "*"
});
const apolloServer = new external_apollo_server_micro_namespaceObject.ApolloServer({
    schema: schema_0
});
const startServer = apolloServer.start();
async function handler(req, res) {
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }
    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql"
    })(req, res);
}
const config = {
    api: {
        bodyParser: false
    }
};
/* harmony default export */ const graphql = (cors(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5247));
module.exports = __webpack_exports__;

})();
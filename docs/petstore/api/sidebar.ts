import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "petstore/api/swagger-petstore-openapi-3-0",
    },
    {
      type: "category",
      label: "pet",
      link: {
        type: "doc",
        id: "petstore/api/pet",
      },
      items: [
        {
          type: "doc",
          id: "petstore/api/update-pet",
          label: "Update an existing pet.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petstore/api/add-pet",
          label: "Add a new pet to the store.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore/api/find-pets-by-status",
          label: "Finds Pets by status.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api/find-pets-by-tags",
          label: "Finds Pets by tags.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api/get-pet-by-id",
          label: "Find pet by ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api/update-pet-with-form",
          label: "Updates a pet in the store with form data.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore/api/delete-pet",
          label: "Deletes a pet.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "petstore/api/upload-file",
          label: "Uploads an image.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "store",
      link: {
        type: "doc",
        id: "petstore/api/store",
      },
      items: [
        {
          type: "doc",
          id: "petstore/api/get-inventory",
          label: "Returns pet inventories by status.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api/place-order",
          label: "Place an order for a pet.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore/api/get-order-by-id",
          label: "Find purchase order by ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api/delete-order",
          label: "Delete purchase order by identifier.",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "user",
      link: {
        type: "doc",
        id: "petstore/api/user",
      },
      items: [
        {
          type: "doc",
          id: "petstore/api/create-user",
          label: "Create user.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore/api/create-users-with-list-input",
          label: "Creates list of users with given input array.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore/api/login-user",
          label: "Logs user into the system.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api/logout-user",
          label: "Logs out current logged in user session.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api/get-user-by-name",
          label: "Get user by user name.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api/update-user",
          label: "Update user resource.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petstore/api/delete-user",
          label: "Delete user resource.",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

import { body, validationResult } from "express-validator";

export const validationRequest = async (req, res, next) => {
  // 1. Validation rules
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
      .notEmpty()
      .withMessage("Price is required")
      .isFloat({ min: 1 })
      .withMessage("Price must be at least 1"),
    body("imageUrl").isURL().withMessage("Invalid URL"),
  ];

  // 2. Run rules
  await Promise.all(rules.map((rule) => rule.run(req)));

  // 3. Collect errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("new-product", {
      errorMessages: errors.array().map((err) => err.msg), // send all messages
    });
  }

  next();
};

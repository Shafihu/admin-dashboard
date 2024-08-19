import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  try {
    await connectToDB();
    const usersPerPage = 2;
    const skip = (page - 1) * usersPerPage;

    const count = await User.countDocuments({
      username: { $regex: q, $options: "i" },
    });

    const users = await User.find({
      username: { $regex: q, $options: "i" },
    })
      .skip(skip)
      .limit(usersPerPage)
      .lean();

    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchProducts = async (q, page) => {
  try {
    await connectToDB();
    const productsPerPage = 2;
    const skip = (page - 1) * productsPerPage;

    const count = await Product.countDocuments({
      title: { $regex: q, $options: "i" },
    });

    const products = await Product.find({
      title: { $regex: q, $options: "i" },
    })
      .skip(skip)
      .limit(productsPerPage)
      .lean();

    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];

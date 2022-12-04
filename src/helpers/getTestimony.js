import axios from "axios";

export const getTestimony = async () => {
  try {
    const { data } = await axios.get(
      "https://testimonialapi.toolcarton.com/api"
    );
    // Order by [ Rating Desc ]
    const respOrdered = data.sort((a, b) => b.rating - a.rating);

    const testimonials = respOrdered.map((item) => {
      return {
        avatar: item.avatar,
        id: item.id,
        location: item.location,
        message: item.message,
        name: item.name,
        rating: item.rating,
      };
    });

    return testimonials;
  } catch (error) {
    return null;
  }
};

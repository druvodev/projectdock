import { imageProps, linkProps } from "./common.query";

export const websiteQuery = (id: string) => {
  return `query websiteQuery{
    website(where: {id: "${id}"}, stage: PUBLISHED) {
      id
      title
      logo {
        ${imageProps}
      }
      defaultTheme
      copyrightText
      contactLinks {
        ${linkProps}
      }
      navigationLinks {
        ${linkProps}
      }
      createdAt
      updatedAt
    }
  }
  `;
};

import { gql } from '@apollo/client'

export const GET_MAIN_PAGE = gql`
  query main($locale: I18NLocaleCode) {
    main(locale: $locale) {
      data {
        attributes {
          content
          experience_markdown1
          experience_markdown2
          experience_markdown3
          experience_markdown4
        }
      }
    }
  }
`

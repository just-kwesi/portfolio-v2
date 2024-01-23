import { AboutItem } from './types'

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

const ABOUT_SECTION = `query AboutCollection {
  aboutCollection {
    total
    items {
      aboutMe
      title
    
    }
  }
}`

export async function fetchAbout() {
  try {
    const data = (await fetchGraphQL(ABOUT_SECTION)) as AboutItem
    return data.data.aboutCollection.items
  } catch (error) {
    console.error('Contentful Error:', error)
    throw new Error('Failed to fetch about me section.')
  }
}

const PROJECTS_QUERY = `query ProjectsCollection {
  projectsCollection{
    total
    limit
    items {
      description
      githubUrl
      tagsModelCollection {
        items {
          ... on Tags {
            tagName
          }
        }
      }
      projectUrl
      title
      projectImage {
        fileName
        description
        url
        title
        width
        height
      }
    }
  }
}`

export async function fetchProjects() {
  try {
    const data = await fetchGraphQL(PROJECTS_QUERY)
    return data.data.projectsCollection
  } catch (error) {
    console.error('Contentful Error:', error)
    throw new Error('Failed to fetch about me section.')
  }
}

import { AboutItem } from './types'
import { unstable_noStore as noStore } from 'next/cache'

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
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const data = (await fetchGraphQL(ABOUT_SECTION)) as AboutItem
    return data.data.aboutCollection.items
  } catch (error) {
    console.error('Contentful Error:', error)
    throw new Error('Failed to fetch about me section.')
  }
}

const PROJECTS_QUERY = `query Items {
  v2ProjectsCollection {
    items {
      githubUrl
      liveUrl
      projectName
      stack
      projectDescription
    }
  }
}`

export async function fetchProjects() {
  try {
    noStore()
    const data = await fetchGraphQL(PROJECTS_QUERY)
    return data.data.v2ProjectsCollection
  } catch (error) {
    console.error('Contentful Error:', error)
    throw new Error('Failed to fetch about me section.')
  }
}

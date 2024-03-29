import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

const getStaticProps = async () => {
  const slug = 'schedule'
  const post = await getPostBySlug(slug)
  console.log('post', post)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      //      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}

export { getStaticProps }
export default Schedule

import DefaultLayout from '../layouts/default'
import DataWrapper from '../containers/DataWrapper'

import PostList from '../components/ApolloTest/PostList'
import Submit from '../components/ApolloTest/Submit'

export default DataWrapper(props =>
  <div>
    <DefaultLayout>
      debugger
      <Submit />
      <PostList />
    </DefaultLayout>
  </div>
)

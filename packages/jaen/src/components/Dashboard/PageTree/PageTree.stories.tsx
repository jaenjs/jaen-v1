import {Story, Meta} from '@storybook/react'

import PageTree from '.'

export default {
  title: 'components/Dashboard/PageTree',
  component: PageTree
} as Meta

const treeExample = {
  'SitePage /test': {
    id: 'test',
    children: [],
    data: {
      title: 'root',
      slug: 'root'
    },
    parent: null
  },
  '1-1': {
    id: '1-1',
    children: ['1-1-1', '1-1-2'],
    data: {
      title: 'First parent',
      slug: 'root1',
      locked: true,
      hasChanges: true
    },
    parent: null
  },
  '1-2': {
    id: '1-2',
    children: [],
    data: {
      title: 'Second parent',
      slug: 'root2'
    },
    parent: null
  },
  '1-1-1': {
    id: '1-1-1',
    children: [],
    data: {
      title: 'Child one',
      slug: 'root3'
    },
    parent: '1-1'
  },
  '1-1-2': {
    id: '1-1-2',
    children: [],
    data: {
      title: 'Child two',
      slug: 'root4',
      hasChanges: true
    },
    parent: '1-1'
  },
  '1-2-1': {
    id: '1-2-1',
    children: [],
    data: {
      title: 'Child three',
      slug: 'root4'
    },
    parent: '1-2'
  },
  '1-2-2': {
    id: '1-2-2',
    children: [],
    data: {
      title: 'Child four',
      slug: 'root4'
    },
    parent: '1-2'
  }
}

const Template: Story = args => (
  <PageTree
    items={treeExample}
    rootItemIds={['SitePage /test', '1-1', '1-2']}
    defaultSelection={'1-1'}
    height={500}
    templates={['HomePage']}
    onItemSelect={() => {}}
    onItemCreate={() => {}}
    onItemDelete={() => {}}
    onItemMove={() => {}}
    {...args}
  />
)

export const Primary = Template.bind({})

Primary.args = {}

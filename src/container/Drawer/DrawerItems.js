import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Checkbox from '@mui/material/Checkbox';
import Toolbar from '@mui/material/Toolbar';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../actions'

const topics = [
    'String',
    'Array',
    'Matrix',
    'Searching & Sorting',
    'Backtracking',
    'Linked List',
    'Stacks & Queues',
    'Greedy',
    'Binary Tree',
    'BST',
    'Heaps & Hashing',
    'Graph',
    'Trie',
    'DP',
    'Bit Manipulation',
    'Segment Trees'
];

const DrawerItems = () => {

    const { topics: filteredTopics, level, status } = useSelector(state => state.filters)

    const [selectedTopics, setSelectedTopics] = useState(filteredTopics);

    const dispatch = useDispatch();

    const handleTopicChange = (event) => {
        const { checked, value } = event.target
        const idx = selectedTopics.indexOf(value);
        let arr = null

        if (checked && idx === -1) {
            arr = [...selectedTopics, value]
            setSelectedTopics(arr)
        }
        else if (!checked && idx !== -1) {
            arr = [...selectedTopics]
            arr.splice(idx, 1)
            setSelectedTopics(arr)
        }

        dispatch(updateFilter({
            key: 'topics',
            value: arr
        }))

    }

    const handleTopicDelete = (value) => () => {
        const idx = selectedTopics.indexOf(value);
        let arr = null

        if (idx !== -1) {
            arr = [...selectedTopics]
            arr.splice(idx, 1)
            setSelectedTopics(arr)
        }

        dispatch(updateFilter({
            key: 'topics',
            value: arr
        }))

    }

    const handleLevelChange = (event) => {
        const { value } = event.target
        dispatch(updateFilter({
            key: 'level',
            value
        }))
    }

    const handleStatusChange = (event) => {
        const { value } = event.target
        dispatch(updateFilter({
            key: 'status',
            value
        }))
    }


    return (
        <div>
            <Toolbar/>
            <Divider>Difficulty Level</Divider>
            <List>
                <FormControl>
                    <RadioGroup
                        name="level"
                        value={level}
                        onChange={handleLevelChange}>
                        {['All', 'Easy', 'Medium', 'Hard'].map((text, index) => (
                            <ListItem key={index}>
                                <FormControlLabel value={text} control={<Radio />} label={text} />
                            </ListItem>
                        ))}
                    </RadioGroup>
                </FormControl>
            </List>
            <Divider>Status</Divider>
            <List>
                <RadioGroup
                    name="status"
                    value={status}
                    onChange={handleStatusChange}>
                    {['Solved', 'Unsolved'].map((text, index) => (
                        <ListItem key={index}>
                            <FormControlLabel value={text} control={<Radio/>} label={text} />
                        </ListItem>
                    ))}
                </RadioGroup>
            </List>
            <Divider>Selected Topics</Divider>
            <List>
                {selectedTopics.map((value, i) => (
                    <Chip
                        key={i}
                        label={value}
                        onDelete={handleTopicDelete(value)}
                    />
                ))}
            </List>
            <Divider>All Topics</Divider>
            <List>
                {
                    topics.map((n, i) => <FormControlLabel
                        value={n}
                        control={<Checkbox onChange={handleTopicChange} />}
                        label={n}
                        key={i}
                        checked={selectedTopics.includes(n)}
                        labelPlacement="end"
                    />)
                }
            </List>
        </div>
    )
}

export default DrawerItems
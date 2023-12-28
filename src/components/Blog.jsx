import React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import BubbleSection from './BubbleSection';

const Blog = () => {
    return (
        <BubbleSection title="Blog Posts">
            <VStack spacing={10}>
                <Text color="brand.text">Coming Soon!</Text>
            </VStack>
        </BubbleSection>
    );
};

export default Blog;

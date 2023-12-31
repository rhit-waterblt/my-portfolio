import React from 'react';
import {
    Box,
    Heading,
    Text,
    Link,
    Button,
    VStack,
    HStack,
    Tag,
    Divider,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { projectCardInfo } from '../constants/ProjectCardInfo';
import BubbleSection from './BubbleSection';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectCardInfo.find((project) => project.id === Number(projectId));

    const { title, description, learnings, githubUrl, imageUrl, reportUrl } = project;
    const hasGithub = githubUrl !== "";
    const hasReport = reportUrl !== "";


    const bgColor = "brand.background";
    const textColor = "brand.text";

    return (
        <BubbleSection>
            <VStack spacing={5} align="stretch">
                <Heading as="h1" size="2xl" color={textColor}>{title}</Heading>
                <Text fontSize="lg" color={textColor}>{description}</Text>

                <Divider />

                <Heading as="h3" size="lg" color={textColor}>What I learned</Heading>
                <VStack spacing={3}>
                    {learnings.map((learning, index) => (
                        <Tag key={index} size="md" variant="solid" colorScheme="teal">
                            {learning}
                        </Tag>
                    ))}
                </VStack>

                <Divider />
                <Heading as="h3" size="lg" color={textColor}>More Information</Heading>
                {hasReport && <Divider />}
                {!hasReport &&
                    <Text fontSize="md" color={textColor}>{description}</Text>}

                <Divider />

                <HStack spacing={4} justifyContent="center">
                    <Link href={githubUrl} isExternal>
                        {hasGithub && <Button leftIcon={<FaExternalLinkAlt />} colorScheme="teal" _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                            GitHub
                        </Button>}
                    </Link>
                </HStack>
            </VStack>
        </BubbleSection>
    );
};

export default ProjectDetail;

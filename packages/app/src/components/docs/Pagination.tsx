import { Block, Flex } from '@cube-dev/ui-kit';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
function Pagination() {
  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="flex-end" gap="1rem">
        <HiChevronLeft size={20} />
        <Block>Overview</Block>
      </Flex>
      <Flex alignItems="flex-end" gap="1rem">
        <Block>API</Block>
        <HiChevronRight size={20} />
      </Flex>
    </Flex>
  );
}

export default Pagination;

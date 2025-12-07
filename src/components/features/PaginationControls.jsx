import Button from '../ui/Button';

const PaginationControls = ({ onNext, onPrev, isStart }) => {
  return (
    <div className="flex gap-4">
      <Button onClick={onPrev} disabled={isStart}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};
export default PaginationControls;
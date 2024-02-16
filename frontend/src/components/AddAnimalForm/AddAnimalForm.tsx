import { FC, useState } from 'react';
import { Animal } from '../../types.ts';

type AddAnimalFormProps = {
  onAdd: (animal: Animal) => void;
}

export const AddAnimalForm: FC<AddAnimalFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setError(null);
    setName(event.currentTarget.value);
  }

  const handleClick = () => {
    if (name === '') {
      setError('enter non-empty name, please');
      return;
    }
    onAdd({ name });
    setName('');
  }

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={handleInput} />
        &nbsp;
        <button onClick={handleClick}>Add animal</button>
      </div>
      {error ? (
        <div>
          Error: {error}
        </div>
      ) : null}
    </div>
  )
}

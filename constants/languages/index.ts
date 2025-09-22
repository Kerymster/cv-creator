import { ProficiencyLevel } from '@/types/languages';

export const proficiencyLevelsKeys: ProficiencyLevel[] = [
  'Native',
  'Fluent',
  'Advanced',
  'Intermediate',
  'Basic',
  'Conversational',
];

export const proficiencyLevels: Array<{
  value: ProficiencyLevel;
  label: string;
  color: string;
}> = [
  {
    value: 'Native',
    label: 'Native',
    color: 'bg-green-100 text-green-800 border-green-200',
  },
  {
    value: 'Fluent',
    label: 'Fluent',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  {
    value: 'Advanced',
    label: 'Advanced',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  {
    value: 'Intermediate',
    label: 'Intermediate',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  },
  {
    value: 'Basic',
    label: 'Basic',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
  },
  {
    value: 'Conversational',
    label: 'Conversational',
    color: 'bg-pink-100 text-pink-800 border-pink-200',
  },
];

import { Button as AriaButton } from 'react-aria-components';
import { ButtonProps } from './Button.types';

const colorClasses = {
    slate: 'bg-slate-600',
    gray: 'bg-gray-600',
    zinc: 'bg-zinc-600',
    neutral: 'bg-neutral-600',
    stone: 'bg-stone-600',
    red: 'bg-red-600',
    orange: 'bg-orange-600',
    amber: 'bg-amber-600',
    yellow: 'bg-yellow-600',
    lime: 'bg-lime-600',
    green: 'bg-green-600',
    emerald: 'bg-emerald-600',
    teal: 'bg-teal-600',
    cyan: 'bg-cyan-600',
    sky: 'bg-sky-600',
    blue: 'bg-blue-600',
    indigo: 'bg-indigo-600',
    violet: 'bg-violet-600',
    purple: 'bg-purple-600',
    fuchsia: 'bg-fuchsia-600',
    pink: 'bg-pink-600',
    rose: 'bg-rose-600',
  };
  
  const hoverColorClasses = {
    slate: 'hover:bg-slate-500',
    gray: 'hover:bg-gray-500',
    zinc: 'hover:bg-zinc-500',
    neutral: 'hover:bg-neutral-500',
    stone: 'hover:bg-stone-500',
    red: 'hover:bg-red-500',
    orange: 'hover:bg-orange-500',
    amber: 'hover:bg-amber-500',
    yellow: 'hover:bg-yellow-500',
    lime: 'hover:bg-lime-500',
    green: 'hover:bg-green-500',
    emerald: 'hover:bg-emerald-500',
    teal: 'hover:bg-teal-500',
    cyan: 'hover:bg-cyan-500',
    sky: 'hover:bg-sky-500',
    blue: 'hover:bg-blue-500',
    indigo: 'hover:bg-indigo-500',
    violet: 'hover:bg-violet-500',
    purple: 'hover:bg-purple-500',
    fuchsia: 'hover:bg-fuchsia-500',
    pink: 'hover:bg-pink-500',
    rose: 'hover:bg-rose-500',
  };
  
  const Button = ({ color = "blue", children, ...rest }: ButtonProps) => {
      const colorClass = colorClasses[color as keyof typeof colorClasses] || 'bg-blue-600';
      const hoverColorClass = hoverColorClasses[color as keyof typeof hoverColorClasses] || 'hover:bg-blue-500';
      return (
          <AriaButton
              className={`rounded ${colorClass} px-2 py-1 text-xs font-semibold text-white shadow-sm ${hoverColorClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600`}
              {...rest}
          >
              {children}
          </AriaButton>
      );
  };

export default Button;
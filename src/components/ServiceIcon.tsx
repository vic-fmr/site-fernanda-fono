import React from 'react';
import { Activity, Brain, Volume2, Smile, Users, ShieldCheck, HeartPulse } from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className = "w-6 h-6" }: ServiceIconProps) {
  switch (name) {
    case 'Activity':
      return <Activity className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'Volume2':
      return <Volume2 className={className} />;
    case 'Smile':
      return <Smile className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    default:
      return <HeartPulse className={className} />;
  }
}

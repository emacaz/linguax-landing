import React from 'react';

interface ProfileOptionCardProps {
    title: string;
    description: string;
    isSelected: boolean;
    onSelect: () => void;
}

const ProfileOptionCard: React.FC<ProfileOptionCardProps> = ({
    title,
    description,
    isSelected,
    onSelect,
}) => {
    return (
        <button
            type="button"
            onClick={onSelect}
            className={`text-left p-5 rounded-xl border transition-colors ${
                isSelected
                    ? 'border-violet-500 bg-violet-900/30'
                    : 'border-gray-700 bg-[#0A0A12]/40 hover:border-gray-500'
            }`}
        >
            <p className="text-lg font-semibold text-white">{title}</p>
            <p className="mt-1 text-sm text-gray-400">{description}</p>
        </button>
    );
};

export default ProfileOptionCard;

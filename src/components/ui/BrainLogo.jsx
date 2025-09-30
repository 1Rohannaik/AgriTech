const BrainLogo = ({ className = "w-8 h-8", color = "#10B981" }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brain outline */}
      <path
        d="M100 20C75 20 55 40 50 65C45 60 38 58 30 62C22 66 20 76 25 84C20 88 18 95 22 102C26 108 34 110 40 106C38 115 42 125 52 130C45 140 50 155 65 160C70 180 90 190 100 190C110 190 130 180 135 160C150 155 155 140 148 130C158 125 162 115 160 106C166 110 174 108 178 102C182 95 180 88 175 84C180 76 178 66 170 62C162 58 155 60 150 65C145 40 125 20 100 20Z"
        fill={color}
        fillOpacity="0.9"
      />
      
      {/* Brain folds/wrinkles - left hemisphere */}
      <path
        d="M65 50C60 55 62 65 70 68C68 75 72 82 80 80C75 88 80 95 88 92C85 100 90 107 98 105"
        fill="none"
        stroke="#065F46"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      <path
        d="M55 75C60 78 65 85 62 92C68 95 75 90 78 95C82 88 88 92 85 98"
        fill="none"
        stroke="#065F46"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Brain folds/wrinkles - right hemisphere */}
      <path
        d="M135 50C140 55 138 65 130 68C132 75 128 82 120 80C125 88 120 95 112 92C115 100 110 107 102 105"
        fill="none"
        stroke="#065F46"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      <path
        d="M145 75C140 78 135 85 138 92C132 95 125 90 122 95C118 88 112 92 115 98"
        fill="none"
        stroke="#065F46"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Central division */}
      <path
        d="M100 30C100 35 100 40 100 45M100 55C100 65 100 75 100 85M100 95C100 110 100 125 100 140M100 150C100 160 100 170 100 180"
        stroke="#065F46"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3,3"
      />
      
      {/* Additional detail folds */}
      <path
        d="M75 110C80 115 85 120 90 115"
        fill="none"
        stroke="#065F46"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      <path
        d="M125 110C120 115 115 120 110 115"
        fill="none"
        stroke="#065F46"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BrainLogo;
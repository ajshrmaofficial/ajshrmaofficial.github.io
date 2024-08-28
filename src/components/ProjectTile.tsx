type ProjectTileType = {
  repoOwner: string;
  repository: string;
  description: string;
  liveLink: string;
  repoLink: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

function ProjectTile({repoOwner, repository, description, liveLink, repoLink}: ProjectTileType) {
  return (
    <div className="box-border flex flex-col lg:w-1/4 w-11/12 text-center border p-3 gap-3 rounded-3xl hover:shadow-lg bg-white">
      <p className="font-bold">{repoOwner}/{repository}</p>
      <p className="text-gray-600">{truncateText(description, 115)}</p>
      <div className="flex justify-between">
        <span  className={`border p-2 lg:w-1/5 rounded-xl bg-[#2b3a52] text-white font-bold hover:shadow-lg ${!liveLink ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          <a target="_blank" href={liveLink} className={`${!liveLink ? 'pointer-events-none' : 'pointer-events-auto'}`}>
            Visit
          </a>
        </span>
        <span className="border p-2 lg:w-1/5 rounded-xl bg-[#2b3a52] text-white font-bold hover:shadow-lg">
          <a target="_blank" href={repoLink}>
            GitHub
          </a>
        </span>
      </div>
    </div>
  );
}

export default ProjectTile;

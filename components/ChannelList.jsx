import { PencilIcon, UsersIcon, ChevronRightIcon } from '@heroicons/react/solid'

export const ChannelList = ({ channels }) => {
  return (
    <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {channels.map((channel) => (
          <li key={channel.name}>
            <a href={`https://slack.com/app_redirect?channel=${channel.name}`} target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50">
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="font-medium text-indigo-600 truncate">#{channel.name}</p>
                      <p className="ml-1 flex-shrink-0 font-normal text-gray-500">in {channel.category}</p>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <PencilIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <p>
                          {channel.description}
                        </p>
                      </div>
                      
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <p>
                          {channel.members}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0">
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
